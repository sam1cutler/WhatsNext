import { NavLink } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {

    return (

        <main className='landing-container'>

            <section>
                <h2><i>Streamline your streaming!</i></h2>
                <p>Do you ever get a recommendation from a friend about a new show to watch, but then can't recall the recommendation a month later? Do you vaguely remember watching a really good British crime show like 3 years ago, but can't remember the show's title or streaming service? Do you want to quickly find a fun comedy, available on Netflix, that a friend watched and enjoyed sometime in the last month? If you answered "yes" to any of these questions, then <b>What's Next?</b> is for you!</p>
            </section>

            <hr />

            <section>
                <h2>
                    Watch List
                </h2>
                <p>Whenever a friend mentions a show they just loved... or you read a review of a new show online... or you scroll past a show that looks cool on your way to finding the show you meant to watch - don't forget about that new show!</p>
                <p>Open up <b>What's Next?</b>, and add the new show to your Watch List.</p>
                <p>If you want, add the streaming service the show is available on, the genre, and where the show "ranks" in your priority queue - is it the next thing on your list? Or something to turn on in a few months once you've finished everything else?</p>
            </section>

            <hr />

            <section>
                <h2>Watched Log</h2>
                <p>Once you've finished a show, move it <i>out</i> of your Watch List and <i>into</i> your Watched Log. And when you do, you have the option to add a rating.</p>
                <p>Now, when a friend asks you about that kinda weird but very cool SciFi show you watched on HBO Max a couple years ago, you know just where to look to find it!</p>
            </section>

            <hr />

            <section>
                <h2>Friends</h2>
                <p>Create a network of friends who use the app, and easily view their profiles.</p>
                <p>Generate an easily-shareable link so that anyone - even people without accounts - can view your profile.</p>
            </section>

            <hr />

            <section>
                <h2>Learn More</h2>
                <div className='next-steps-container'>
                    <NavLink
                        to='/watch-list'
                        className='next-step'
                    >
                        
                            Test out a demo to see how the app functions as an established user.
                        
                    </NavLink>

                    <NavLink
                        to='/signup'
                        className='next-step'
                    >
                        Sign up for an account and get started.
                    </NavLink>
                </div>
            </section>

        </main>

    )

}

export default LandingPage;