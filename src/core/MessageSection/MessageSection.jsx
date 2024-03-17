import MessageItem from "./MessageItem"


const data = [
    {
        year : '01',
        title : 'Birthday Message',
        details : 'First of All Happy 21st Birthday Nikonee!  ٩(＾◡＾)۶,   I wish you are going closer into something that you want to be aaaand \n I wish you are going to be an English Teacher frfr nocap ongod \n',
    },
    {
        year : '02',
        title : 'My Message',
        details : "See I finally Made it ╥﹏╥, \n I thought it will takes 1-3 days but it becomes more than 1 week. \n I know this is kinda clunky and rough since I just learn the language (even the message section can't use Enter (∥￣■￣∥)). \n Aaaanyways thank you so much for being there to talk to even the most random stuff for me this is just returning the favor. Also I'm so Bad with Human Languages too so bear with me. \n ",
    },
    {
        year : '03',
        title : 'Thoughts about You',
        details : 'You know at first I thought people like you are Impossible and back then I always thought people who are super kind and keep being postive 24/7 are just Naive. \n But boi o boi yeah you prove me wrong Thank you for being soooo kind and Your smile really bring power to people. Weeeellll, not for me tho since its so bright to the point my doctor said I almost go blind щ(▼ﾛ▼щ). \n ALL IN ALL THANKYOU SO MUCH FOR BEING NIKONEE!',
    },
]

const MessageSection = () => {
  return (
    <div>
        <div className="absolute left-0 px-5 md:px-10 top-5">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-5 md:mt-20">Message Section</h1>
            {data.map((item, idx) => (
                <MessageItem
                key={idx}
                year={item.year}
                title={item.title}
                details={item.details}
                />
            ))}
        </div>
       
    </div>
  )
}

export default MessageSection