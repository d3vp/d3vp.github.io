
class Book:
    """ Represents a Book """

    def __init__(self, title, author, genre, price):
        self.title = title
        self.author = author
        self.genre = genre
        self.price = price

    def __str__(self):
        return self.title + ", " + self.author + ", $" + str(self.price)

    def on_sale(self):
        self.price = round(self.price / 2, 2)

    def is_cheaper(self, other_book):
        return self.price < other_book.price


class Bookstore:
    """ Bookstore with a collection of Books """

    def __init__(self, name, books=[]):
        self.name = name        
        self.books = books

    def display_books(self):
        print(self.name)
        for b in self.books:
            print(b)

    def add_book(self, title, author, genre, price):
        new_book = Book(title, author, genre, price)
        self.books.append(new_book)
        
    def start_sale(self):
        for b in self.books:
            b.on_sale()


if __name__ == "__main__":
    # Write tests/examples below
    
    b = Book("Animal Farm", "G. O.", "Satire", 15.0)
    print(b)  # Animal Farm, G. O., $15.0
    
    b.on_sale()
    print(b.price)  # 7.5

    b1 = Book("Animal Farm", "G.O.", "Satire", 15.0)
    b2 = Book("Harry Potter", "J.K.R.", "Fantasy", 30.0)
    print(b1.is_cheaper(b2)) # True
    print(b2.is_cheaper(b1)) # False


    b1 = Book("Animal Farm", "G. O.", "Satire", 15.0)
    b2 = Book("Harry Potter", "J.K.R.", "Fantasy", 30.0)
    b3 = Book("The Lord of the Rings", "J.R.R.T.", "Fantasy", 27.0)
    b4 = Book("Dracula", "B.S.", "Horror", 17.5)

    books = [b1, b2, b3, b4]
    store = Bookstore("My Book Store", books)
    store.display_books()

    store.add_book("War and Peace", "Leo Tolstoy", "Historical", 12.5)
    store.display_books()
    
    store.start_sale()
    store.display_books()
    
