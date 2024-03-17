// eslint-disable-next-line react/prop-types
const MessageItem = ({year, title, details}) => {
    return (
      <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white"/>
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-2xl">
            <span className="inline-block px-2 py-1 font-semibold text-white bg-blue-700">
              {year}
            </span>
            <span className="text-lg md:text-xl font-semibold text-blue-600">
              {title}
            </span>
          </p>
          <p className="my-2 text-base text-justify md:text-l font-normal text-stone-500">
            {details}
          </p>
        </li>
      </ol>
  )
}

export default MessageItem