import React, { useContext, useState, useEffect, Component } from 'react'
import { auth } from './firebase'
import { AdventureDetails } from './data/AdventuresDetailData'

const AuthContext = React.createContext()
const ProjectContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout(){
        return auth.signOut()
    }

    function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email){
        return currentUser.updateEmail(email)
    }

    function updatePassword(password){
        return currentUser.updatePassword(password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

class ProjectProvider extends Component {
    state = {
        projects: [],
        loading: true
    }

    componentDidMount(){
        let projects = this.formatData(AdventureDetails)

        // console.log(projects);

        this.setState({
            projects,
            loading: false
        })
    }

    formatData(data){
        let tempData = data.map(data =>{
            // let id = data.id
            // let images= data.image
            let project = {...data};
            return project
        })
        return tempData;
    }

    getProject = slug =>{
        let tempProject = [...this.state.projects];
        const project= tempProject.find((project) => project.slug === slug);
        return project;
    }

    render() {
        return (
            <ProjectContext.Provider 
            value={{ 
                ...this.state,
                getProject: this.getProject
                }}
                >
                {this.props.children}
            </ProjectContext.Provider>
                
        )
    }
}

const ProjectConsumer = ProjectContext.Consumer;

export { ProjectProvider, ProjectConsumer, ProjectContext }

// HIGH ORDER COMPONENT

export function withProjectConsumer(Component){
    return function ConsumerWrapper(props){
        return <ProjectConsumer>
            { value => <Component {...props} context={value}/>}
        </ProjectConsumer>
    }
}