const NO_BOOK_COVER_IMG = "no_book_cover.png";

const ImgUrl = (imgName) => `https://firebasestorage.googleapis.com/v0/b/myreads-udacity-5a1c0.appspot.com/o/${imgName || NO_BOOK_COVER_IMG}?alt=media`;

export {
    ImgUrl
};