#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Setting up upstream remote...${NC}"
# Check if upstream remote exists
if ! git remote | grep -q '^upstream$'; then
    read -p "Enter the original repository URL: " upstream_url
    git remote add upstream "$upstream_url"
fi

echo -e "${BLUE}Fetching latest changes from upstream...${NC}"
git fetch upstream

echo -e "${BLUE}Ensuring your main branch is up to date...${NC}"
git checkout main
git merge upstream/main

echo -e "${BLUE}Pushing changes to your fork...${NC}"
git push origin main

echo -e "${GREEN}Ready to create PR!${NC}"
echo -e "Now go to your fork on GitHub and click 'Contribute' -> 'Open Pull Request'"
