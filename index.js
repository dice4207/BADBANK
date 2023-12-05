 function Spa(){
 return (
   <HashRouter>
       <NavBar/>
       <UserContext.Provider value={{user:[{name: 'wesley Jones',
       email: 'dicejones36@gmail.com', password:'secret', balance:100}]}}>
         <Route path="/" exact component={Home}/>
          <Route path="/CreateAccount/"component={CreateAccount}/>
          <Route path="/alldata/"  component={AllData}/>
  </UserContext.Provider>
   </HashRouter>
);
}
 
 ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
 )