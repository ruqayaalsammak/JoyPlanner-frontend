const Landing = () => {
    return (
        <main>
        <section className="card">
            <h1>Welcome!</h1>
            <p>Sign up or sign in.</p>
        </section>

        <section className="card">
            <h1>Packages</h1>
            <div>
                <h3>Bronze</h3>
                <p>Essential event coordination and basic scheduling tools</p>
            </div>
            <div>
                <h3>Silver</h3>
                <p>Standard planning features with custom task lists.</p>
            </div>
            <div>
                <h3>Gold</h3>
                <p>Full-suite event management, timeline tracking, and priority support. </p>
            </div>
        </section>
        </main>
    )
}

export default Landing