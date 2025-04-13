docker build --no-cache -f SQL\Dockerfile.PostgreSql -t diagramma_variantov/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t diagramma_variantov/app ../..
