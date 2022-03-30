# Zarf Website Github Actions

## Secrets

In order to run the github actions for the Zarf website a repo owner will need to add 1-2 secrets to the forked repo.

- ACCESS_TOKEN (required)
  - This ghp token can be created by an owner or collaborator
  - Must have permission to
    - create repo
    - delete repo
    - push to repo
- ORG (optional for non-organizational repositories)
  - The name of the organization that will own the repo.
  - Used to ensure pr-staging, development, and production repositories are created in the correct place.
  - If the repo does not exist within an organization this should be left undefined.

## Forking

The zarf website was intentionally set up to allow for contributors and other users to easily fork and setup their own working environment within their own account or organization.

### Steps

- Fork the zarf-website repository.
- Add the ACCESS_TOKEN and ORG (if repo is within an organization) secrets.
- Enable actions on the forked repository.
  - This will recreate the dev environment within the forked repositories gh account and enable staging and pull request previews.
  - Commiting to the "develop" branch will deploy to the staging environment.
  - Deleting the "develop" branch will not delete the staging environment, but staging will no longer recieve updates unless another branch with the name "develop" is created.
  - Commiting to the master (main) branch will deploy to production.
