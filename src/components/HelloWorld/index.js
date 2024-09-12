// Mengimpor gambar logo dari folder assets
import devcodeLogo from "../../assets/devcode-logo.png";
import "./style.css";

export const HelloWorld = () => {
  return (
    <div className="hello">
      {/* Menggunakan gambar yang sudah diimpor */}
      <img
        data-cy="devcode-logo"
        src={devcodeLogo}  // Menggunakan variabel devcodeLogo yang sudah diimpor
        alt="devcode logo"
      />
      <div data-cy="devcode-title">
        {/* Menambahkan elemen heading */}
        <h1>I'm ready for the next challenge!</h1>
      </div>
    </div>
  );
};
