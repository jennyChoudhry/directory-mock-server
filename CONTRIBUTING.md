# Contributing

Before editing the code, make sure your local `master` branch is up to date

```sh
git checkout master
git pull
```

Create a branch while on master

```sh
git checkout -b my-branch-name
```

## Commit Messages

Make changes and commit them (along with reference to JIRA issue, if applicable).
Follow [these seven rules][commit-rules] when writing commit messages.

`DM-19` in the example below is a reference to the JIRA issue.

```sh
git commit -m '[DM-19] Description of your awesome feature or bug fix'
```

Rebase your branch on the latest `master`; don't make merge commits.
If you provide the `-i` flag [you can rework your commits][rebase].

```sh
git checkout master
git pull
git checkout -      # - is a shortcut for most recent branch
git rebase -i master
```

Push your branch to GitHub.

```sh
git push -u origin HEAD
```

Open a pull request, assign a team member, and apply `needs review` label.
Make sure to include a summary of the changes made in the description.

## Merging

To merge a pull request, first make sure you're up to date with `master` and try to fast-forward merge the branch.

```sh
git checkout master
git pull
git merge --ff-only origin/<branch-name>
```

If that worked, `git push` and you're done!

Otherwise, if the branch has diverged from `master` the merge will fail.
In this case, check out the branch locally, rebase it, and push it back.

[commit-rules]: http://chris.beams.io/posts/git-commit/
[rebase]: https://robots.thoughtbot.com/git-interactive-rebase-squash-amend-rewriting-history
