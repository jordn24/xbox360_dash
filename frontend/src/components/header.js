import React from 'react';
import profile_pic from '../assets/images/profile_pic.png'
import monkey_pic from '../assets/images/Monkey.webp'
import dragon_pic from '../assets/images/Dragon.webp'
import pandemic_pic from '../assets/images/Pandemic.webp'
import blueFace_pic from '../assets/images/Blue-Face-Man.webp'
import dog_pic from '../assets/images/Dog.jpeg'

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isForm: false , username: "Jordan Sposito", selectPhoto: false, profilePic: profile_pic};

        this.handleChange = this.handleChange.bind(this);
        this.changeToForm = this.changeToForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeToSelectPhoto = this.changeToSelectPhoto.bind(this);
        this.updatePhoto = this.updatePhoto.bind(this);

    }

    handleSubmit(event) {
        if(this.state.username === ""){
            this.setState( () => ({
                username: "Jordan Sposito"
            }))
        }
        event.preventDefault();
        this.changeToForm();
    }

    handleChange(event) {
        this.setState( () => ({
            username: event.target.value
        }))
    }

    changeToForm() {
        this.setState( (prevState) => ({
            isForm: !prevState.isForm
        }))
    }

    changeToSelectPhoto() {
        this.setState( (prevState) => ({
            selectPhoto: !prevState.selectPhoto
        }))
    }

    updatePhoto(event) {
        console.log(event)
        this.setState( () => ({
            profilePic: event.target.src
        }))
        this.changeToSelectPhoto()
    }

    render() {
        
        var usernameElem;
        var photoElem;

        if (this.state.isForm){
            usernameElem =  <> <form onSubmit={this.handleSubmit} className='text-white float-end mt-1 fs-4 d-lg-none d-xl-block'>
                                    <input type="text" value={this.state.username} onChange={this.handleChange}/>
                                </form>
                                <form onSubmit={this.handleSubmit} className='text-white float-end mt-3 fs-5 d-none d-xl-none d-lg-block'>
                                    <input type="text" value={this.state.username} onChange={this.handleChange}/>
                                </form>
                            </>
        } else {
            usernameElem = <> <p onClick={this.changeToForm} className="text-white float-end mt-1 fs-3 d-lg-none d-xl-block">{this.state.username}</p>
            <p onClick={this.changeToForm} className="text-white float-end mt-3 fs-5 d-none d-xl-none d-lg-block">{this.state.username}</p></> 
        }

        if (this.state.selectPhoto){
            photoElem = <div className='row'> 
                            <div className='row p-0 m-0'>
                                <div className='col p-1'>
                                    <img onClick={(this.updatePhoto)} className="img-fluid" src={monkey_pic} alt="profile"></img>
                                </div>
                                <div className='col p-1'>
                                    <img onClick={(this.updatePhoto)} className="img-fluid" src={dragon_pic} alt="profile"></img>
                                </div>
                                <div className='col p-1'>
                                    <img onClick={(this.updatePhoto)} className="img-fluid" src={profile_pic} alt="profile"></img>
                                </div>
                            </div>
                            <div className='row p-0 m-0'>
                                <div className='col p-1'>
                                    <img onClick={(this.updatePhoto)} className="img-fluid" src={pandemic_pic} alt="profile"></img>
                                </div>
                                <div className='col p-1'>
                                    <img onClick={(this.updatePhoto)} className="img-fluid" src={blueFace_pic} alt="profile"></img>
                                </div>
                                <div className='col p-1'>
                                    <img onClick={(this.updatePhoto)} className="img-fluid" src={dog_pic} alt="profile"></img>
                                </div>
                            </div>
                        </div>
        } else {
            photoElem = <img onClick={(this.changeToSelectPhoto)} className="img-fluid float-start" height="50" width="50" src={this.state.profilePic} alt="profile"></img>
        }

        return (
            <div className="row float-right mb-1">
                <div className="col-lg-2 offset-lg-9 col-7">
                    {usernameElem}
                </div>
                <div className="col-lg-1 col-5">
                    {photoElem}
                </div>
                </div>
        );
    }
};

export default Header;