
import './App.css'
import GrandFather from './Family/GrandFateher/GrandFather'
// import SingleForm from './componenet/FormSubmit/SingleForm'
// import ReuseableForm from './componenet/ReusabelForm/ReuseableForm'
// import StateForm from './componenet/StateForm'
// import RefForm from './componenet/UseRefForm/RefForm'
// import HookForm from './HookControlForm/HookForm'

function App() {


// const handleSingupProfile=(data)=>{
//   console.log('singUpdara',data)
// }
// const handleUpdateProfile=data=>{
//   console.log('updata profile data',data)
// }
  return (
    <>
     
      <h1>Form Master</h1>

<GrandFather></GrandFather>

     {/* <SingleForm></SingleForm> */}
     {/* <StateForm></StateForm> */}
     {/* <RefForm></RefForm> */}
     {/* <HookForm></HookForm> */}
     {/* <ReuseableForm 
     formTitle={'SingUp'} submitBtn={'Submit'} handleSubmit={handleSingupProfile}>
      <div>
        <h2>SingUp</h2>
        <p>Plese signUp right Now</p>
        </div>
     </ReuseableForm>
     <ReuseableForm 
      handleSubmit={handleUpdateProfile}
      formTitle={'Profile Update'} submitBtn={'Update'} >
        <div>
          <h2>Please updata your profile</h2>
        </div>
      </ReuseableForm> */}
    </>
  )
}

export default App
