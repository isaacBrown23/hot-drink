import TopNav from "../Components/TopNav";

export default function SuccessPage() {


    return (
        <>
            <TopNav name="Thank you" />
            <div className="success">
                <div className="success__content">
                    <div className="success__content-text">

                        <h1>
                            Thank you!
                        </h1>
                        <p>You will shortly receive an email with your order confirmation and a tracking number for your package. </p>
                    </div>
                </div>
            </div>
        </>
    )
}