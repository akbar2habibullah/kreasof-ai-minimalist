// This file would handle MDX processing in a real implementation
// For this example, we'll create a simplified version

export type ResearchPost = {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  content: string
  image: string
}

// In a real implementation, this would fetch and process MDX files
export async function getResearchPost(slug: string): Promise<ResearchPost | null> {
  // This is a mock implementation
  const posts: Record<string, ResearchPost> = {
    "early-self-perturbation-learning": {
      slug: "early-self-perturbation-learning",
      title: "Early Study: Self-Perturbation Learning for Verifying Mathematical Reasoning",
      date: "April 20, 2025",
      author: "Habibullah Akbar, Muhammad Hazim",
      image: "/images/early-spl.webp",
      excerpt:
        "Imagine \"2 truth and a lie\", but formalized as ML training objective",
      content: `
*   **Conference:** 10th International Conference on Computer Science and Computational Intelligence 2025 (ICCSCI 2025).
*   **Authors:** Habibullah Akbar*, Muhammad Hazim Al Farouq, Advendio Desandros**, Mahmud Isnan**, Bens Pardamean** (*Corresponding author, **External author/contributor).
*   **Source:** Procedia Computer Science (Pre-print/Early Access).

## Abstract

Training effective models to verify mathematical reasoning often requires large amounts of manually annotated data, creating a significant bottleneck. This paper introduces **Self-Perturbation Learning (SPL)**, a novel self-supervised approach designed to train mathematical reasoning verifiers without manual labels. SPL works by training a model to distinguish between authentic mathematical reasoning steps ("truths") from existing datasets and automatically generated, plausible but incorrect reasoning steps ("lies"). Two "lie" generation strategies were explored: (1) replacing tokens based on word embedding similarity and (2) using a Large Language Model (LLM - Gemini 2.0 Flash Lite) for more semantically complex perturbations. Using ModernBERT architectures, models were trained on embedding-perturbed data (2 million samples) and LLM-perturbed data (100,000 samples). Evaluations on the MATH-WD-Lite benchmark showed both SPL models outperformed a supervised baseline reward model (Accuracy: 0.3063 SPL-Embedding, 0.3812 SPL-LLM vs. 0.2750 Supervised). Notably, the SPL-LLM model achieved the highest accuracy despite using significantly less training data, highlighting the potential of LLM-guided perturbations. While promising, challenges related to LLM data generation cost, training stability, and model calibration require further research.
      
## 1. Introduction

*   **Problem:** Mathematical reasoning verification models typically rely on supervised learning, which requires costly and time-consuming manual data annotation, hindering scalability.
*   **Proposed Solution:** Self-Perturbation Learning (SPL), a self-supervised method inspired by the "Two Truths and a Lie" game.
*   **Goal:** Train a verifier model (based on BERT architecture) to identify false reasoning steps ("lies") generated automatically from correct steps ("truths"), eliminating the need for manual labels.
*   **Context:** Builds upon prior work using BERT for mathematical reasoning and self-supervised learning concepts.

## 2. Methodology: Self-Perturbation Learning (SPL)

The core idea is to train a model to differentiate between original, correct reasoning steps and artificially perturbed, incorrect ones.

1.  **Generate "Truths":** Authentic mathematical reasoning steps are sourced from existing datasets (e.g., \`math-ai/AutoMathText\`). These serve as the positive examples.
2.  **Introduce a "Lie" (Perturbation Strategies):** Create negative examples (impostors) by modifying the "truths". Two methods were used:
    *   **Embedding-based Perturbation:**
        *   Tokens are replaced with others based on cosine similarity of their word embeddings.
        *   Different "difficulty" levels are created:
            *   *Hard Impostors:* Replace with tokens ranked 1-10 in similarity (e.g., "cat" -> "dog").
            *   *Medium Impostors:* Replace with tokens ranked 11-50 in similarity.
            *   *Easy Impostors:* Replace with tokens ranked 51-100 in similarity (e.g., "cat" -> "the").
        *   A large dataset (2 million samples) was created using this method (\`kreasof-ai/SPL-Combined\`).
    *   **LLM-based Perturbation:**
        *   Leveraged Gemini 2.0 Flash Lite to generate more semantically nuanced and contextually plausible, yet incorrect, reasoning steps.
        *   Aimed to create more challenging "lies" for the verifier.
        *   A smaller dataset (100,000 samples) was created due to the cost/time of LLM API calls (\`kreasof-ai/SPL-100K-AutoMathText-llm-deviated\`).
3.  **Train the Verifier Model:**
    *   A pre-trained BERT model (\`answerdotai/ModernBERT-large\` for embedding, \`answerdotai/ModernBERT-base\` for LLM) is fine-tuned.
    *   The model is trained using a binary classification objective (e.g., BCEWithLogitsLoss or Focal Loss) to predict whether a given reasoning step is a "truth" or a "lie".

## 3. Experiments and Evaluation

*   **Verifier Models Trained:**
    *   SPL-Embedding: ModernBERT-large trained on 2M embedding-perturbed samples.
    *   SPL-LLM: ModernBERT-base trained on 100K LLM-perturbed samples.
*   **Baseline:** A supervised reward model (\`RLHFlow/Llama3.1-8B-PRM-Deepseek-Data\`).
*   **Evaluation Benchmark:** **MATH-WD-Lite** - A custom benchmark derived from MATH-500, designed specifically for *discriminative* evaluation. It presents problems in a multiple-choice format (one correct answer, three plausible but incorrect decoys).
*   **Metric:** Accuracy (correctly identifying the true reasoning step among alternatives).

## 4. Results

**Overall Accuracy on MATH-WD-Lite:**

| Model                 | Training Data Size | Accuracy |
| :-------------------- | :----------------- | :------- |
| Supervised Baseline   | N/A (Pre-trained)  | 0.2750   |
| SPL 2M (Embedding)    | 2,000,000          | 0.3063   |
| **SPL 100K (LLM)**    | **100,000**        | **0.3812** |

**Accuracy by Difficulty Level (MATH-WD-Lite):**

| Level | Supervised Baseline | SPL 2M (Embedding) | SPL 100K (LLM)     |
| :---- | :------------------ | :----------------- | :----------------- |
| 1     | 0.3333              | 0.3333             | **0.6000**         |
| 2     | 0.2973              | 0.3514             | **0.4865**         |
| 3     | 0.2258              | 0.3226             | **0.4194**         |
| 4     | 0.2368              | **0.3684**         | 0.3158             |
| 5     | **0.3077**          | 0.1795             | 0.2308             |

**Key Findings:**

*   Both SPL methods significantly outperformed the supervised baseline model in overall accuracy.
*   The SPL-LLM model achieved the highest accuracy, despite being trained on 20x less data than the SPL-Embedding model. This suggests LLM-generated perturbations are more effective for training discriminative capabilities.
*   SPL models generally showed stronger performance across most difficulty levels compared to the baseline.

## 5. Discussion and Limitations

*   **Potential of SPL:** The results demonstrate SPL is a promising self-supervised direction for training mathematical reasoning verifiers, reducing reliance on manual annotation.
*   **LLM Perturbation Effectiveness:** LLM-guided perturbations seem highly effective, leading to better performance with less data.
*   **Scalability & Stability:** Attempts to scale the embedding-based model beyond 2M samples didn't yield significant gains, and training stability (loss fluctuations) was a challenge.
*   **LLM Cost:** Generating data via LLM APIs is computationally expensive and time-consuming, limiting the practical size of the LLM-perturbed dataset in this study.
*   **Calibration:** The SPL-LLM model, while accurate, showed signs of potential under-calibration (unusual range in output scores), requiring further investigation.

## 6. Conclusion

Self-Perturbation Learning (SPL) offers a viable self-supervised alternative for training mathematical reasoning verification models. By contrasting authentic reasoning with automatically generated "lies" (using either embedding similarity or LLM guidance), SPL models outperformed a supervised baseline. The superior performance of the LLM-perturbed model, despite using much less data, highlights the quality of LLM-generated negative examples. Future work should focus on addressing the limitations concerning LLM data generation costs, improving training stability, scaling the approach, and enhancing model calibration.

## Acknowledgements

The study acknowledges support from BINUS University and contributions from Kreasof AI, utilizing computational resources from Google Cloud Platform (GCP) via Google Vertex AI and NVIDIA A100 GPUs.
      `,
    },
  }

  return posts[slug] || null
}
