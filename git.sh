#!/bin/bash
# Author: Vijiyarathan Rithush
# Date:   30.01.2026
# Desc:   pushes to git (commit msg needed)

set -e

if [ -z "$1" ]; then
  echo "Error: commit message is required."
  echo "Usage: ./git-push.sh \"commit message\""
  exit 1
fi

COMMIT_MESSAGE="$1"

BRANCH=$(git rev-parse --abbrev-ref HEAD)

echo "Current branch: $BRANCH"
echo "Commit message: $COMMIT_MESSAGE"

git add .

if git diff --cached --quiet; then
  echo "Error: no changes to commit."
  exit 1
fi

git commit -m "$COMMIT_MESSAGE"
git push origin "$BRANCH"

echo "Push completed successfully."