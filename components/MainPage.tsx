import Link from 'next/link'

const MainPage = () => {
  return (
    <div className="flex h-screen w-screen min-w-fit items-center justify-center bg-bgColor ">
      <div className="h-auto min-h-[50%] w-3/4 min-w-fit flex-col rounded-xl bg-textColor p-2 text-center text-textColor ">
        <div className="bg-textColor font-sans text-5xl text-primaryColor">
          Quiz Gra
        </div>
        <div className="my-4 font-sans text-2xl text-bgColor">Nowa Gra</div>
        <div className=" m-2 rounded-lg bg-primaryColor py-1 px-10 font-bold   text-bgColor hover:bg-bgColor hover:text-textColor ">
          <Link href="/quizNewGame" className="p-1  text-3xl">
            Zaczynamy quiz
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainPage
