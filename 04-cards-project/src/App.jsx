import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSosIFBNXozZVg2OtmPRFP35iNPjEHPZ9wBEyikoFeNqA&s",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$32/hour",
    location: "Islamabad, Pakistan"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTo3-7hEo5B0u5CTAkUh3QdVd6z4ty-9itlvxHcjftg&s=10",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$38/hour",
    location: "Lahore, Pakistan"
  },
  {
    brandLogo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
    companyName: "Microsoft",
    datePosted: "3 days ago",
    post: "UI/UX Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$28/hour",
    location: "Karachi, Pakistan"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$45/hour",
    location: "Islamabad, Pakistan"
  },
  {
    brandLogo: "https://static.dezeen.com/uploads/2021/11/meta-facebook-rebranding-name-news_dezeen_2364_col_sq.jpg",
    companyName: "Meta",
    datePosted: "4 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$40/hour",
    location: "Remote, Pakistan"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSthFkKxxe5oOqzfgM7YR46pLgPnm9Q4ihc6Cz3RsR3akjh-KFpH7NTKORj&s=10",
    companyName: "NVIDIA",
    datePosted: "10 days ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$50/hour",
    location: "Lahore, Pakistan"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTluh0zSa3EAAkP1U7u2L_Ah9CZqMOlpnd7PtEnhaNoOg&s=10",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    post: "Web Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$30/hour",
    location: "Remote, Pakistan"
  },
  {
    brandLogo: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24760594/Adobe_wordmark.jpg?quality=90&strip=all&crop=7.8125,0,84.375,100",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$36/hour",
    location: "Islamabad, Pakistan"
  },
  {
    brandLogo: "https://crystalpng.com/wp-content/uploads/2025/05/ibm-logo.png",
    companyName: "IBM",
    datePosted: "5 weeks ago",
    post: "Web Application Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$27/hour",
    location: "Rawalpindi, Pakistan"
  },
  {
    brandLogo: "https://download.logo.wine/logo/Intel/Intel-Logo.wine.png",
    companyName: "Intel",
    datePosted: "10 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$42/hour",
    location: "Karachi, Pakistan"
  }
];



  
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem){
        return <Card logo={elem.brandLogo} company={elem.companyName} date={elem.datePosted} role={elem.post} firstTag={elem.tag1} secondTag={elem.tag2} salary={elem.pay} loca={elem.location} />
      })}
    </div>
  )
}

export default App