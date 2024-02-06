import Input from "../../components/input"

const Form = () => {
    return (
        <div className="bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
            <div className="text-4xl font-extrabold">
                welcome
            </div>
            <div className="text-xl font-light mb-14">
                Sign up now to get started
            </div>
            <Input label="Full Name" name="name" placeholder="Enter your full name" className="mb-6"/>
            <Input label="Email Address" name="email" placeholder="Enter your email" className="mb-6"/>
            <Input label="Password" type="password" name="password" placeholder="Enter your password" className="mb-6"/>
        </div>
    )
}

export default Form