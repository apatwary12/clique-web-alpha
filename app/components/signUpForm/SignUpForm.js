"use client"
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";



export default function SignUpForm() {
	const auth = getAuth();
	const router = useRouter();
	const [signup, setSignup] = useState(false);
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState('');

	const signupWithEmailAndPassword = () => {
		if (password !== confirmPassword) {
			setError('Please make sure your passwords match');
			return;
		}

		setError('');
		setSignup(true);

		createUserWithEmailAndPassword(auth, email, password)
			.then(result => {
				console.log("RESULT: ", result);
				if(!result.user.emailVerified) {
					router.push("/verify")
				} else {
					router.push("/dashboard");
				}
				// Send email verification
				sendEmailVerification(auth.currentUser)
					.then(() => {
						console.log("SIGN UP RESULT: ", result);
						router.push('/dashboard');
					})
					.catch(error => {
						console.log("Email verification error: ", error);
						setError('Unable to send email verification. Please try again later.');
						setSignup(false);
					});
			})
			.catch((error) => {
				console.log("SIGNUP ERROR ", error);

				if (error.code && error.code.includes('auth/weak-password')) {
					setError('Please enter a stronger password.');
				} else if (error.code && error.code.includes('auth/email-already-in-use')) {
					setError('Email already in use.');
				} else {
					setError('Unable to register. Please try again later.');
				}

				setSignup(false);
			});
	}

	return (
		<form id="signup" className="flex flex-col items-center mt-32">
			<div className="mb-10 text-black">
				<h2 className="font-lato">CREATE AN ACCOUNT!</h2>
			</div>
			<input
				className="my-2.5 bg-white2 text-black placeholder-gray-600 text-s w-96 h-12 indent-2.5 p-2 rounded-xl border-2 border-orange font-openSans font-light"
				type="name"
				placeholder="User Name"
				onChange={event => setUsername(event.target.value)}
				required />
			<input
				className="my-2.5 bg-white2 text-black placeholder-gray-600 text-s w-96 h-12 indent-2.5 p-2 rounded-xl border-2 border-orange font-openSans font-light"
				type="email"
				placeholder="Email"
				onChange={event => setEmail(event.target.value)}
				required />
			<input
				className="my-2.5 bg-white2 text-black placeholder-gray-600 text-s w-96 h-12 indent-2.5 p-2 rounded-xl border-2 border-orange font-openSans font-light"
				type="password"
				placeholder="Password"
				onChange={event => setPassword(event.target.value)}
				required />
			<input
				className="my-2.5 bg-white2 text-black placeholder-gray-600 text-s w-96 h-12 indent-2.5 p-2 rounded-xl border-2 border-orange font-openSans font-light"
				type="password"
				placeholder="Confirm Password"
				onChange={event => setConfirmPassword(event.target.value)}
				required />
			<div>
				<button
					disabled={signup}
					className="p-2 rounded-xl border-2 px-10 border-orange mt-5 text-black hover:bg-orange hover:text-white2 font-openSans"
					type="submit"
					onClick={() => signupWithEmailAndPassword()}
				>
					SIGN UP!
				</button>
			</div>
			<div className="text-red-500">{error}</div>
		</form>
	)
}