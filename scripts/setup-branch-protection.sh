#!/usr/bin/env bash
# Copyright 2026 Duitar
# Licensed under the Elastic License 2.0
# https://www.elastic.co/licensing/elastic-license
#
# Sets up branch protection rules on the main branch.
# Requires: gh CLI installed and authenticated (https://cli.github.com)
#
# Usage:
#   ./scripts/setup-branch-protection.sh owner/repo
#
# Example:
#   ./scripts/setup-branch-protection.sh bishal/duitar

set -euo pipefail

REPO="${1:?Usage: $0 owner/repo}"

echo "Setting branch protection on main for ${REPO}..."

gh api \
  --method PUT \
  "repos/${REPO}/branches/main/protection" \
  --input - <<'EOF'
{
  "required_status_checks": {
    "strict": true,
    "contexts": [
      "lint",
      "build",
      "typecheck"
    ]
  },
  "enforce_admins": false,
  "required_pull_request_reviews": {
    "required_approving_review_count": 1,
    "dismiss_stale_reviews": true,
    "require_code_owner_reviews": true
  },
  "restrictions": null,
  "required_linear_history": true,
  "allow_force_pushes": false,
  "allow_deletions": false,
  "required_conversation_resolution": true
}
EOF

echo ""
echo "Branch protection enabled on main:"
echo "  - PRs required (1 approval minimum)"
echo "  - Stale reviews dismissed on new pushes"
echo "  - CODEOWNERS review required"
echo "  - Status checks required: lint, build, typecheck"
echo "  - Status checks must be up-to-date before merge"
echo "  - Linear history required (no merge commits)"
echo "  - Force pushes blocked"
echo "  - Branch deletion blocked"
echo "  - Conversations must be resolved before merge"
echo ""
echo "Done."
