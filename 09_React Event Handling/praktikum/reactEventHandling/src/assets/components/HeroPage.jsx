export default function HeroPage () {

  // Soal Prioritas 2
  const article = {
    title: {
      id: "Buat Akun",
      en: "Create Account"
    },
    description: {
      id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
      en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
    }
  };

  return (

    <div>
        <div className="container mx-auto">
          <div className="flex justify-center mt-4">
            <img src="src\assets\images\Tailwind_CSS_Logo.svg.png" alt="" />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl py-4">{article.title.en}</h1>
            <p className="pb-4 text-center">
              {article.description.en}
            </p>
          </div>
        </div>
    </div>
  )
}