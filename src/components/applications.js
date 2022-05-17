
const Applications = (props) =>{
    const {appsList} = props
    const {appName, appImage} = appsList
    return(
        <>
            <section className='appBoxStyling'>
                <section className='appStyling d-flex flex-column m-3'>
                {appName}
                <img src={appImage} alt='appsImages'/>
                </section>
            </section>
             
        </>
    )
}
export default Applications 