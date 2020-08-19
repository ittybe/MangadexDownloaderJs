namespace MangadexDownloaderJs.Models
{
    export class ChapterModel
    {
        public ChapterId: Number;

        public Pages: Array<PageModel>;

        public Chapter : String;

        public Volume : String;


        /**
         * getChapterNumber
         */
        public getChapterNumber() : Number
        {
            return 2;
        }

        /**
         * getVolumeNumber
         * 
         * 
         */
        public getVolumeNumber() : Number
        {
            return 2;
        }

    }
}