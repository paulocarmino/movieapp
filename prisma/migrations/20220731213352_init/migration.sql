-- CreateTable
CREATE TABLE "Browser" (
    "browserId" TEXT NOT NULL,

    CONSTRAINT "Browser_pkey" PRIMARY KEY ("browserId")
);

-- CreateTable
CREATE TABLE "Movie" (
    "tmdbId" TEXT NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("tmdbId")
);

-- CreateTable
CREATE TABLE "_BrowserToMovie" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BrowserToMovie_AB_unique" ON "_BrowserToMovie"("A", "B");

-- CreateIndex
CREATE INDEX "_BrowserToMovie_B_index" ON "_BrowserToMovie"("B");

-- AddForeignKey
ALTER TABLE "_BrowserToMovie" ADD FOREIGN KEY ("A") REFERENCES "Browser"("browserId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BrowserToMovie" ADD FOREIGN KEY ("B") REFERENCES "Movie"("tmdbId") ON DELETE CASCADE ON UPDATE CASCADE;
