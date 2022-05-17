import {Component} from 'react'
import Applications from './components/applications';
import Tabs from './components/AppStore/tabs';

const tabsList =[
  {tabId:1, tabName: 'BOOKS', textContent: 'Books'},
  {tabId:2, tabName: 'BROWSERS', textContent: 'Browsers'},
  {tabId:3, tabName: 'ENTERTAINMENT', textContent: 'Entertainment'},
  {tabId:4, tabName: 'FOOD', textContent: 'Food'},
  {tabId:5, tabName: 'GAMES', textContent: 'Games'},
]

const appsList =[
  
  {appId:2, appCategory: 'BOOKS', appName: 'Ramayana', appImage: 'https://image.winudf.com/v2/image1/Y29tLndSQU1BWUFOQUlOS0FOTkFEQV8xMTcwODQyOV9zY3JlZW5fMF8xNTk3NDU3Mjk4XzAzOA/screen-0.jpg?fakeurl=1&type=.jpg'},
  {appId:3, appCategory: 'BOOKS', appName: 'MahaBharata', appImage: 'https://play-lh.googleusercontent.com/GW4A35YOP9QJ1K36x0YQSd9WjKy7EXxHdjkEzt95ky_5rid1s84tpTJDgar33iDzKXI'},
  {appId:4, appCategory: 'BOOKS', appName: 'BhagavatGetha', appImage: 'https://image.winudf.com/v2/image/Y29tLnRlbHVndS5hbmRyb2lkLnRlbHVndWJoYWdhdmF0YW1rYXRoYWx1X3NjcmVlbnNob3RzXzBfYTg1ZWU4Y2Q/screen-0.jpg?fakeurl=1&type=.jpg'},


  {appId:5, appCategory: 'BROWSERS', appName: 'Chrome', appImage: 'https://www.xda-developers.com/files/2018/01/Chrome-Feature-Image-Background-Colour.png'},
  {appId:6, appCategory: 'BROWSERS', appName: 'Edge', appImage: 'https://cdn.vox-cdn.com/thumbor/IhPPB4MaJS7mBxzhPY7lfIM65M0=/0x0:1980x1320/1200x800/filters:focal(832x502:1148x818)/cdn.vox-cdn.com/uploads/chorus_image/image/65613211/microsoftedgenewlogo.5.jpg'},
  {appId:7, appCategory: 'BROWSERS', appName: 'Firefox', appImage: 'https://www.cnet.com/a/img/resize/4afc21739ab279eeb602ae8457f764e4714fed18/2014/06/13/c582d2aa-092e-4d29-a616-a1e5c9403b36/firefox-logo-2014-vertical-4sts.jpg?auto=webp&width=940'},
  {appId:8, appCategory: 'BROWSERS', appName: 'Kiwi', appImage: 'https://raw.githubusercontent.com/kiwibrowser/src.next/kiwi/kiwi_logo_circle.svg'},
  {appId:9, appCategory: 'BROWSERS', appName: 'Opera', appImage: 'https://www-static-sites.operacdn.com/wp-content/uploads/sites/2/2018/11/Opera_2015_icon.svg_.png'},
  {appId:10, appCategory: 'BROWSERS', appName: 'Puffin', appImage: 'https://www.apkmirror.com/wp-content/uploads/2018/10/5bc405070caf4.png'},

  
  {appId:11, appCategory: 'ENTERTAINMENT', appName: 'Aha', appImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Aha_OTT_Logo.svg/1200px-Aha_OTT_Logo.svg.png'},
  
  {appId:12, appCategory: 'ENTERTAINMENT', appName: 'Disney+', appImage: 'https://yt3.ggpht.com/He8LqFcTM7R54ZCHvp_6-hyi0zIMvoNK8EG_41dEfBPi7HAGM9myoUsdipEV-RW1y69xwJBr=s900-c-k-c0x00ffffff-no-rj'},
  {appId:13, appCategory: 'ENTERTAINMENT', appName: 'Hulu', appImage: 'https://yt3.ggpht.com/ytc/AKedOLQdF7_QX9SKsaLx3OCHq6lo3ajklRGeacSWvL77Dg=s900-c-k-c0x00ffffff-no-rj'},
  {appId:14, appCategory: 'ENTERTAINMENT', appName: 'Netflix', appImage: 'https://play-lh.googleusercontent.com/384jx3OL4_tqtCGZrfIB6Q5TehM0Q7TLYFsenRPfeT8f-3vicWH2BYbvaEAneaPFMMM'},
  {appId:15, appCategory: 'ENTERTAINMENT', appName: 'Prime', appImage: 'https://images.news18.com/ibnlive/uploads/2021/10/amazon-prime-16337567583x2.jpg'},
  {appId:16, appCategory: 'ENTERTAINMENT', appName: 'Spotify', appImage: 'https://images.indianexpress.com/2021/08/Spotify.jpg'},
  {appId:17, appCategory: 'ENTERTAINMENT', appName: 'Youtube', appImage: 'https://yt3.ggpht.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s900-c-k-c0x00ffffff-no-rj'},
  {appId:18, appCategory: 'ENTERTAINMENT', appName: 'Zee5', appImage: 'https://s3images.zee5.com/wp-content/uploads/sites/7/2020/08/ZEE5-1.jpg'},
 

  {appId:19, appCategory: 'FOOD', appName: 'Domino`s', appImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/1200px-Dominos_pizza_logo.svg.png'},
  {appId:20, appCategory: 'FOOD', appName: 'Dunzo', appImage: 'https://entrackr.com/wp-content/uploads/2020/06/Dunzo-image.jpg'},
  {appId:21, appCategory: 'FOOD', appName: 'EatSure', appImage: 'http://lh3.googleusercontent.com/7IkaaBmyQDi6CO4aob4cWBb1XOU13QYYK14T7IKmVL7Lq103Mqmc7k_lymJaUiZHJ3J4Oo_P10M6A1OEb081-_VPHTGCtMaMW8t_o7Lr'},
  {appId:22, appCategory: 'FOOD', appName: 'Faasos', appImage: 'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/ioocsiba9z8fdebi81wf'},
  {appId:23, appCategory: 'FOOD', appName: 'Foodpanda', appImage: 'https://www.foodpanda.com/wp-content/uploads/2020/04/foodpanda_cover.png'},
  {appId:24, appCategory: 'FOOD', appName: 'Grubhub', appImage: 'https://seekvectorlogo.com/wp-content/uploads/2021/12/grubhub-vector-logo-2021.png'},
  {appId:25, appCategory: 'FOOD', appName: 'JustEat', appImage: 'https://diginomica.com/sites/default/files/images/2020-09/FF19B1E4-3A97-404D-A463-E93528CF82F9.jpeg'},
  {appId:26, appCategory: 'FOOD', appName: 'Swiggy', appImage: 'https://www.oneindia.com/img/1200x80/2017/07/swiggy-19-1500443913.jpg'},
  {appId:27, appCategory: 'FOOD', appName: 'UberEats', appImage: 'https://www.ns804.com/wp-content/uploads/2019/08/ubereats-banner-black_0.jpg'},
  {appId:28, appCategory: 'FOOD', appName: 'Zomato', appImage: 'https://m.economictimes.com/thumb/msid-57934935,width-1200,height-900,resizemode-4,imgsize-70796/zomato-processes-2-million-online-orders-in-a-month-sees-23-mom-growth.jpg'},


  {appId:29, appCategory: 'GAMES', appName: 'AngryBirds', appImage: 'https://www.pngitem.com/pimgs/m/450-4506401_angry-birds-game-logo-hd-png-download.png'},
  {appId:30, appCategory: 'GAMES', appName: 'CandyCrush', appImage: 'https://store-images.s-microsoft.com/image/apps.54354.13510798882606697.7a42c472-75d7-487e-9538-ebb5ce1657e6.372723d8-dd1a-450a-9fed-d420e7705e4e'},
  {appId:31, appCategory: 'GAMES', appName: 'PokemonGO', appImage: 'https://www.mobipicker.com/wp-content/uploads/2016/08/pokemon-go-logo.jpg'},
  {appId:32, appCategory: 'GAMES', appName: 'PUBG', appImage: 'https://seeklogo.com/images/P/pubg-mobile-logo-28E182F8A8-seeklogo.com.png'},
  {appId:33, appCategory: 'GAMES', appName: 'SubwaySurfers', appImage: 'https://m.media-amazon.com/images/M/MV5BNGU4M2M3ZGQtZjRmYS00MjgwLTliM2EtNzAxM2MwMDlhMjI2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_.jpg'},
  ]

class App extends Component{
     state ={
       activeTab: tabsList[0].tabName
     }
     getFilteredApps =() =>{
       const {activeTab} =this.state
       const filteredApps = appsList.filter(
         eachApp=> eachApp.appCategory===activeTab
       )
       return filteredApps
      }
      updateApp = tabName =>{
        this.setState({activeTab: tabName})
      }

  render(){  
    const filteredApps = this.getFilteredApps() 
    return(
      <>
          <div className='appStoreStyle col-12 col-sm-6 m-auto'>
            <h1>App Store</h1>
            <ul className='tabButtonsStyle m-auto p-3'>
              {tabsList.map(eachTab=>(
                <Tabs updateApp={this.updateApp} tabsList={eachTab} key={eachTab.tabId}/>
              ))}
            </ul>
              <ul>              
              {filteredApps.map(eachApp=>(
                <Applications appsList={eachApp} key={eachApp.appId}/>
              ))}
              </ul>
          </div>
      </>
    )
  }
}
export default App;
