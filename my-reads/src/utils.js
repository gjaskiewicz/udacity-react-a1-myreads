const NO_BOOK_COVER_IMG = "no_book_cover.png";

const ImgUrl = (book) => 
    (book.imageLinks || { }).smallThumbnail ||
    `https://firebasestorage.googleapis.com/v0/b/myreads-udacity-5a1c0.appspot.com/o/${NO_BOOK_COVER_IMG}?alt=media`;

export {
    ImgUrl
};