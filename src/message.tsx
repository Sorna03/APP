function Message()
{
    const name='TripMilestone'
    const text='Travel your Milestone! On a Mission to create budget Travelling for Millions🧳'
    const intro='TripMilestone is your ultimate companion for seamless travel experiences.Offering a wide array of curated packages, it provides exclusive deals and offers that include flights, accommodations, and more. TripMilestone ensures convenience with everything bundled together. With seamless booking and personalized options, it is designed to make every journey unforgettable.'
        return(
        <>
        <h1 style={{color: "purple",textAlign:"center"}}>Welcome to {name}</h1>
        <h3 style={{color: "black",textAlign:"center"}}>{text}<br /><br /></h3>
        <p>{intro}</p>
        </>
        );  
}
export default Message;