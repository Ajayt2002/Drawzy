// import { SignInForm } from "@/components/auth/signin-form";
// import ScreenLoading from "@/components/ScreenLoading";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import Link from "next/link";
// import { Suspense } from "react";

// export default function SignInPage() {
//     return (
//         <Card className="border-0 shadow-none lg:shadow-2xl rounded-3xl m-0 mx-auto px-6 py-8 lg:p-16 relative z-10 max-w-[480px] bg-yellow-light">
//             <CardHeader className="p-0">
//                 <CardTitle className="text-2xl font-bold text-center text-[#0a0a0a]">Hi there!</CardTitle>
//                 <CardDescription className="text-sm pb-4 text-primary text-center text-[#171717]">Enter your email to sign in to your account</CardDescription>
//             </CardHeader>
//             <CardContent className="p-0 !my-0">
//                 <Suspense fallback={<ScreenLoading />}>
//                     <SignInForm />
//                 </Suspense>
//             </CardContent>
//             <CardFooter className="px-0 pt-2 pb-0 flex-col !mt-0 gap-2">
//                 <div className="relative flex h-7 items-center justify-center gap-2">
//                     <div className="w-6 border-t border-yellow-darker"></div>
//                     <span className="flex-shrink font-primary text-sm text-yellow-darker">or</span>
//                     <div className="w-6 border-t border-yellow-darker"></div>
//                 </div>
//                 <div className="flex w-full flex-col items-center gap-3">
//                     <Link className="text-color-primary text-sm hover:underline hover:underline-offset-4 transition-all duration-200 ease-in-out" href="/auth/signup">Don&apos;t have an account? Sign Up</Link>
//                 </div>
//                 <div className="flex w-full flex-col items-center gap-3">
//                     <Link className="text-color-primary text-sm hover:underline hover:underline-offset-4 transition-all duration-200 ease-in-out" href="/">Back to Home</Link>
//                 </div>
//             </CardFooter>
//         </Card>
//     );
// }


import { SignInForm } from "@/components/auth/signin-form";
import ScreenLoading from "@/components/ScreenLoading";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Suspense } from "react";

export default function SignInPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-yellow-50">
            <Card className="border-0 shadow-xl rounded-3xl mx-4 lg:mx-auto px-8 py-10 lg:p-16 max-w-md bg-yellow-light relative z-10">
                <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-3xl font-bold text-center text-gray-900">
                        Welcome Back!
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-700 text-center mt-2">
                        Enter your email and password to sign in
                    </CardDescription>
                </CardHeader>

                <CardContent className="p-0">
                    <Suspense fallback={<ScreenLoading />}>
                        <SignInForm />
                    </Suspense>
                </CardContent>

                <CardFooter className="pt-6 flex flex-col items-center gap-4">
                    <div className="flex items-center w-full gap-2">
                        <div className="flex-1 h-px bg-yellow-darker"></div>
                        <span className="text-sm text-yellow-darker font-medium">or</span>
                        <div className="flex-1 h-px bg-yellow-darker"></div>
                    </div>

                    <Link
                        href="/auth/signup"
                        className="text-yellow-darker text-sm hover:underline transition-all duration-200"
                    >
                        Don&apos;t have an account? Sign Up
                    </Link>

                    <Link
                        href="/"
                        className="text-gray-600 text-sm hover:underline transition-all duration-200"
                    >
                        Back to Home
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}
