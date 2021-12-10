-- CreateTable
CREATE TABLE "User" (
    "login" TEXT NOT NULL,
    "id" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "node_id" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "gravatar_id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "html_url" TEXT NOT NULL,
    "followers_url" TEXT NOT NULL,
    "following_url" TEXT NOT NULL,
    "gists_url" TEXT NOT NULL,
    "starred_url" TEXT NOT NULL,
    "subscriptions_url" TEXT NOT NULL,
    "organizations_url" TEXT NOT NULL,
    "repos_url" TEXT NOT NULL,
    "events_url" TEXT NOT NULL,
    "received_events_url" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "site_admin" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "blog" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hireable" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "twitter_username" TEXT NOT NULL,
    "public_repos" INTEGER NOT NULL,
    "public_gists" INTEGER NOT NULL,
    "followers" INTEGER NOT NULL,
    "following" INTEGER NOT NULL,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_node_id_key" ON "User"("node_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_avatar_url_key" ON "User"("avatar_url");

-- CreateIndex
CREATE UNIQUE INDEX "User_gravatar_id_key" ON "User"("gravatar_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_url_key" ON "User"("url");

-- CreateIndex
CREATE UNIQUE INDEX "User_html_url_key" ON "User"("html_url");

-- CreateIndex
CREATE UNIQUE INDEX "User_gists_url_key" ON "User"("gists_url");

-- CreateIndex
CREATE UNIQUE INDEX "User_starred_url_key" ON "User"("starred_url");

-- CreateIndex
CREATE UNIQUE INDEX "User_subscriptions_url_key" ON "User"("subscriptions_url");

-- CreateIndex
CREATE UNIQUE INDEX "User_organizations_url_key" ON "User"("organizations_url");

-- CreateIndex
CREATE UNIQUE INDEX "User_repos_url_key" ON "User"("repos_url");

-- CreateIndex
CREATE UNIQUE INDEX "User_events_url_key" ON "User"("events_url");

-- CreateIndex
CREATE UNIQUE INDEX "User_received_events_url_key" ON "User"("received_events_url");

-- CreateIndex
CREATE UNIQUE INDEX "User_site_admin_key" ON "User"("site_admin");

-- CreateIndex
CREATE UNIQUE INDEX "User_blog_key" ON "User"("blog");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_hireable_key" ON "User"("hireable");

-- CreateIndex
CREATE UNIQUE INDEX "User_twitter_username_key" ON "User"("twitter_username");

-- CreateIndex
CREATE UNIQUE INDEX "User_created_at_key" ON "User"("created_at");

-- CreateIndex
CREATE UNIQUE INDEX "User_updated_at_key" ON "User"("updated_at");
