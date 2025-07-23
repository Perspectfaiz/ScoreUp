import React, { useState } from 'react';
import styles from './About.module.css';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function About() {
	const text =
		"From cluttered notes to cleaner code, ScoreUp was born not in a lab, but in lived experience — built by students who refused to settle for stress. What we faced, we fixed — with intent, empathy, and sleepless dedication. Let’s grow together — because ScoreUp is the only test you need for tomorrow.";

	const words = text.split(' ');
	const [hoverIndex, setHoverIndex] = useState(null);

	return (
		<>
			<Navbar></Navbar>
			<div className={styles.aboutus}>
				<div className={styles.contents}>
					<div className={styles.header}>
						The Story behind{' '}
						<img className={styles.scoreupimg} src="/6527325.png" alt="Scoreup" />{' '}
						<span className={styles.scoreup}>ScoreUp</span>
					</div>

					<div className={styles.containstory}>
						<div className={styles.storyleft}>
							The story behind Score Up begins with a problem every student faces — the overwhelming chaos of exam preparation. Juggling scattered notes, inconsistent mock tests, and the constant pressure to perform leaves little room for clarity or confidence. We experienced this struggle firsthand. So, We focused on what truly mattered: clean design, distraction-free test environments, and access to bite-sized revision material when it’s needed most.
						</div>

						<div className={styles.storyright}>
							<div className={styles.storyrighttop}>
								It began with a vision to make test preparation smarter, simpler, and less chaotic. Late-night coding sessions followed as engineering students built a platform for easy test-taking and quick revision using curated cheat sheets designed for real student needs.
							</div>
							<div className={styles.storyrightbottom}>
								Driven by passion, ScoreUp is the only test you need for tomorrow.
							</div>
						</div>
					</div>

					<div className={styles.horline}></div>

					<div className={styles.builthead}>
						How You <span>ScoreUp</span>
					</div>

					<div className={styles.builtcontainer}>
						<div className={styles.builtleft}>
							<div className={`${styles.builttopic} ${styles.builttopicleft}`}>
								Teach Smarter
							</div>
							<div className={styles.builttxtcontainer}>
								<p>Create and launch tests in minutes</p>
								<p>Monitor student scores live and effortlessly</p>
								<p>Upload notes, cheat sheets, and prep kits with ease</p>
								<p>Focus on mentoring — we handle the tools</p>
							</div>
						</div>

						<div className={styles.builtmid}>
							<div className={`${styles.builttopic} ${styles.builttopicmid}`}>
								Learn Sharper
							</div>
							<div className={styles.builttxtcontainer}>
								<p>Attempt topic-wise tests with smooth navigation</p>
								<p>Instantly view scores, Charts and get smart feedback</p>
								<p>Access crisp notes made for last-minute prep</p>
								<p>Prep faster, score higher — all in one place</p>
							</div>
						</div>

						<div className={styles.builtright}>
							<div className={`${styles.builttopic} ${styles.builttopicright}`}>
								Study Sprint
							</div>
							<div className={styles.builttxtcontainer}>
								<p>Packed with cheat sheets, short notes, and summaries</p>
								<p>Built for speed — revise in minutes, not hours</p>
								<p>Strengthen weak spots with rapid recall tools</p>
								<p>Your go-to zone before every test</p>
							</div>
						</div>
					</div>

					<div className={styles.horline}></div>

					<div className={styles.builthead}>
						It had to be <span>ScoreUp</span>
					</div>

					<div className={styles.container2}>
						<div className={styles.container2textbox}>
							<p>
								{words.map((word, i) => {
									const isBlack = hoverIndex !== null && i <= hoverIndex;
									return (
										<span
											key={i}
											onMouseEnter={() => setHoverIndex(i)}
											onMouseLeave={() => setHoverIndex(null)}
											style={{
												color: isBlack ? 'black' : '#aaaaaa',
												cursor: 'default',
												userSelect: 'none',
												transition: 'color 0.3s ease',
											}}
										>
											{word}
											{i < words.length - 1 ? ' ' : ''}
										</span>
									);
								})}
							</p>
						</div>
					</div>

					<div className={styles.horline}></div>

                    <div className={styles.builthead}>
						The Team{' '}
                        <img className={styles.scoreupimg} src="/6527325.png" alt="Scoreup" />{' '}
                        <span>ScoreUp</span>
					</div>

                    <div className={styles.teamcontent}>
                        <div className={styles.teamtray}>
                            <div className={`${styles.teamtrayleft} ${styles.teamcard}`}>
                                <div className={`${styles.teamcardtop}`}>
                                    <img className={styles.teampic} src="/faiz.png" alt="imagine" />
                                </div>
                                <div className={`${styles.teamcardmid}`}>
                                    <p className={styles.name}>Md Faiz</p>
                                    <p className={styles.title}>Title</p>
                                </div>
                                <div className={`${styles.teamcardbottom}`}>
                                    <a href="mailto:faizmd.work@gmail.com"><i class="fa-solid fa-envelope"></i></a>
                                    <a href="https://www.linkedin.com/in/md-faiz-6619b925b/"><i class="fa-brands fa-linkedin"></i></a>
                                    <a href="https://www.instagram.com/perspectfaiz/"><i class="fa-brands fa-square-instagram"></i></a>
                                </div>
                            </div>
                            <div className={`${styles.teamtrayright} ${styles.teamcard}`}>
                                <div className={`${styles.teamcardtop}`}>
                                    <img className={styles.teampic} src="/manish.png" alt="imagine" />
                                </div>
                                <div className={`${styles.teamcardmid}`}>
                                    <p className={styles.name}>Manish Verma</p>
                                    <p className={styles.title}>Title</p>
                                </div>
                                <div className={`${styles.teamcardbottom}`}>
                                    <a href="mailto:vermanish272155@gmail.com"><i class="fa-solid fa-envelope"></i></a>
                                    <a href="https://www.linkedin.com/in/manish-verma-828446262/"><i class="fa-brands fa-linkedin"></i></a>
                                    <a href="https://www.instagram.com/ma.nishverma187/"><i class="fa-brands fa-square-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.teamtray}>
                            <div className={`${styles.teamtrayleft} ${styles.teamcard}`}>
                                <div className={`${styles.teamcardtop}`}>
                                    <img className={styles.teampic} src="/akash.png" alt="imagine" />
                                </div>
                                <div className={`${styles.teamcardmid}`}>
                                    <p className={styles.name}>Akash Jha</p>
                                    <p className={styles.title}>Title</p>
                                </div>
                                <div className={`${styles.teamcardbottom}`}>
                                    <a href="mailto:akashxjha@gmail.com"><i class="fa-solid fa-envelope"></i></a>
                                    <a href="https://www.linkedin.com/in/akash-jha-6026062b5"><i class="fa-brands fa-linkedin"></i></a>
                                    <a href="https://www.instagram.com/akash.chronicle/"><i class="fa-brands fa-square-instagram"></i></a>
                                </div>
                            </div>
                            <div className={`${styles.teamtrayright} ${styles.teamcard}`}>
                                <div className={`${styles.teamcardtop}`}>
                                    <img className={styles.teampic} src="/pratik.png" alt="imagine" />
                                </div>
                                <div className={`${styles.teamcardmid}`}>
                                    <p className={styles.name}>Pratik Soni</p>
                                    <p className={styles.title}>Title</p>
                                </div>
                                <div className={`${styles.teamcardbottom}`}>
                                    <a href=""><i class="fa-solid fa-envelope"></i></a>
                                    <a href=""><i class="fa-brands fa-linkedin"></i></a>
                                    <a href="https://www.instagram.com/pratik_s_124/"><i class="fa-brands fa-square-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.imgcentre}>
                        <img className={`${styles.scoreupbottomimg}`} src="/6527325.png" alt="Scoreup" />
                    </div>
                    
				</div>
			</div>
			<Footer></Footer>
		</>
	);
}
