import BookCard from "../bookCard";
import styles from "./booksSection.module.css";
import SectionHeader from "@/components/sectionHeader";

const BooksSection = ({ books, renderStars, text, title, viewAllLink }) => {
  return (
    <section className={styles.bookSection}>
      <SectionHeader
        text={text}
        title={title}
        viewAllLink={viewAllLink}
      />

      <div className={styles.booksGrid}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} renderStars={renderStars} />
        ))}
      </div>
    </section>
  );
};

export default BooksSection;
