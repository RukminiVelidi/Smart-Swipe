# 💳 Smart Swipe
This project applies various machine learning algorithms to detect fraudulent transactions in a credit card dataset. Fraud detection is a crucial task in finance due to the high cost of false positives and the rarity of fraud events.

---

## 📘 Overview

This notebook demonstrates:

- Data cleaning & preprocessing
- Handling imbalanced data
- Training models (Logistic Regression, Decision Tree, Random Forest, XGBoost)
- Model evaluation using accuracy, precision, recall, F1-score, and ROC-AUC
- Visualization of performance metrics

---

## 📂 Dataset Information

- **Source**: [Kaggle - Credit Card Fraud Detection](https://www.kaggle.com/mlg-ulb/creditcardfraud)
- **Total Records**: 284,807 transactions
- **Fraudulent Transactions**: 492 (0.172%)
- **Features**:
  - `V1` to `V28`: PCA-transformed features
  - `Time`: Seconds elapsed between the first transaction and the current one
  - `Amount`: Transaction amount
  - `Class`: Target variable (0 = Legit, 1 = Fraud)

> ⚠️ Dataset is highly imbalanced, requiring special handling for model training.

---

## 📦 Requirements

No need for a separate `requirements.txt`. You can install all dependencies using pip:

```bash
pip install pandas numpy matplotlib seaborn scikit-learn xgboost
