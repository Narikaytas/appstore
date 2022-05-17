
const Tabs =(props) =>{
    const {tabsList,updateApp} =props
    const {textContent,tabName} = tabsList
    const selectedApps =() =>{
        updateApp(tabName)
    }
    return(
        <>
            
            <button onClick={selectedApps}   className="tabButtonsStyle col-12 col-sm-3 col-md-4 m-1 btn btn-primary">{textContent}</button>
                 
        </>
    )
}
export default Tabs