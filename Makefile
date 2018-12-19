pull:
	../../node_modules/@musical-patterns/cli/bin/pull.sh

.PHONY: test
test:
	pushd ../..; JASMINE_CONFIG_PATH="src/zdaubyaos/test/jasmine.js" PATTERN_NAME="ZDAUBYAOS" make test; popd
