## Makefile directory ##
ROOT_DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

## Set 'bash' as default shell
SHELL := $(shell which bash)

## Set 'help' target as the default goal
.DEFAULT_GOAL := help

.PHONY: help
help: ## Show this help
	@egrep '^[a-zA-Z0-9_\/-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort -d | awk 'BEGIN {FS = ":.*?## "; printf "Usage: make \033[0;34mTARGET\033[0m \033[0;35m[ARGUMENTS]\033[0m\n\n"; printf "Targets:\n"}; {printf "  \033[33m%-25s\033[0m \033[0;32m%s\033[0m\n", $$1, $$2}'

.PHONY: install
install: ## Install dependencies
	@npm install

YEARS := $(shell seq -f "%02g" 2022 2022)
CHALLENGES := $(shell seq -f "%02g" 1 4)

.PHONY: run
run: ## Run a challenge (make run YEAR=2022 CHALLENGE=01)
	@if [ -z "$(YEAR)" ] || [ -z "$(CHALLENGE)" ]; then \
		for year in $(YEARS) ; do \
			for challenge in $(CHALLENGES) ; do \
				echo "🚀 Challenge $$year/$$challenge" ; \
				node $$year/challenge-$$challenge/solution.js ; \
				echo ; \
			done \
		done \
	else \
		echo "🚀 Challenge $(YEAR)/$(CHALLENGE)" ; \
		node $(YEAR)/challenge-$(CHALLENGE)/solution.js; \
	fi
