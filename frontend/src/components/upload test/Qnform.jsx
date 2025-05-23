import styles from './Qnform.module.css'

export function Qnform({ data, page, setPage, secIndex }) {

    // Ensure options array has 4 values
    const options = [...(data.options || [])];
    while (options.length < 4) options.push("");


    return (
        <div className={styles.qnform}>
            <div className={styles.content}>
                <div className={styles.top}>
                    <div className={styles.qninfo}>
                        <div className={styles.qnno}>
                            #{data.index + 1}
                        </div>
                        <textarea
                            className={styles.qntxtarea}
                            placeholder='Type your question here...'
                            value={data.qnstat?.length ? data.qnstat : ""}
                            onChange={(e) => {
                                const newValue = e.target.value;

                                setPage(prevPage => {
                                    const updatedSections = prevPage.section.map((section, secIdx) => {
                                        if (secIdx === secIndex) {
                                            return {
                                                ...section,
                                                list: section.list.map((qn, qnIdx) =>
                                                    qnIdx === data.index ? { ...qn, qnstat: newValue } : qn
                                                )
                                            };
                                        }
                                        return section;
                                    });

                                    return { ...prevPage, section: updatedSections };
                                });
                            }}
                        />
                    </div>
                    <div className={styles.qnimg}>
                        <button className={styles.imgbtn}>Add Image</button>
                    </div>
                </div>

                <div className={styles.bottom}>
                    {/* Option A */}
                    <div className={styles.optinfo}>
                        <div className={styles.optno}>
                            <input
                            type="radio"
                            name={`ans-${secIndex}-${data.index}`} // unique name per question
                            value={0} // i is 0 for Option A, 1 for B, etc.
                            checked={data.ans === 0}
                            onChange={() => {
                                setPage(prevPage => ({
                                ...prevPage,
                                section: prevPage.section.map((section, secIdx) =>
                                    secIdx === secIndex
                                    ? {
                                        ...section,
                                        list: section.list.map((qn, qnIdx) =>
                                            qnIdx === data.index
                                            ? { ...qn, ans: 0 }
                                            : qn
                                        )
                                        }
                                    : section
                                )
                                }));
                            }}
                            />
                        </div>
                        <textarea
                            className={styles.opttxtarea}
                            placeholder='Option A here...'
                            value={data.options?.[0] || ""}
                            onChange={(e) => {
                                setPage(prevPage => ({
                                    ...prevPage,
                                    section: prevPage.section.map((item, index) =>
                                        index === secIndex
                                            ? {
                                                ...item,
                                                list: item.list.map((qn, qnIndex) =>
                                                    qnIndex === data.index
                                                        ? {
                                                            ...qn,
                                                            options: qn.options.map((opn, idx) =>
                                                                idx === 0 ? e.target.value : opn
                                                            )
                                                        }
                                                        : qn
                                                )
                                            }
                                            : item
                                    )
                                }));
                            }}
                        ></textarea>
                    </div>

                    {/* Option B */}
                    <div className={styles.optinfo}>
                        <div className={styles.optno}>
                            <input
                            type="radio"
                            name={`ans-${secIndex}-${data.index}`} // unique name per question
                            value={1} // i is 0 for Option A, 1 for B, etc.
                            checked={data.ans === 1}
                            onChange={() => {
                                setPage(prevPage => ({
                                ...prevPage,
                                section: prevPage.section.map((section, secIdx) =>
                                    secIdx === secIndex
                                    ? {
                                        ...section,
                                        list: section.list.map((qn, qnIdx) =>
                                            qnIdx === data.index
                                            ? { ...qn, ans: 1 }
                                            : qn
                                        )
                                        }
                                    : section
                                )
                                }));
                            }}
                            />
                        </div>
                        <textarea
                            className={styles.opttxtarea}
                            placeholder='Option B here...'
                            value={data.options?.[1] || ""}
                            onChange={(e) => {
                                setPage(prevPage => ({
                                    ...prevPage,
                                    section: prevPage.section.map((item, index) =>
                                        index === secIndex
                                            ? {
                                                ...item,
                                                list: item.list.map((qn, qnIndex) =>
                                                    qnIndex === data.index
                                                        ? {
                                                            ...qn,
                                                            options: qn.options.map((opn, idx) =>
                                                                idx === 1 ? e.target.value : opn
                                                            )
                                                        }
                                                        : qn
                                                )
                                            }
                                            : item
                                    )
                                }));
                            }}
                        ></textarea>
                    </div>

                    {/* Option C */}
                    <div className={styles.optinfo}>
                        <div className={styles.optno}>
                            <input
                            type="radio"
                            name={`ans-${secIndex}-${data.index}`} // unique name per question
                            value={2} // i is 0 for Option A, 1 for B, etc.
                            checked={data.ans === 2}
                            onChange={() => {
                                setPage(prevPage => ({
                                ...prevPage,
                                section: prevPage.section.map((section, secIdx) =>
                                    secIdx === secIndex
                                    ? {
                                        ...section,
                                        list: section.list.map((qn, qnIdx) =>
                                            qnIdx === data.index
                                            ? { ...qn, ans: 2 }
                                            : qn
                                        )
                                        }
                                    : section
                                )
                                }));
                            }}
                            />
                        </div>
                        <textarea
                            className={styles.opttxtarea}
                            placeholder='Option C here...'
                            value={data.options?.[2] || ""}
                            onChange={(e) => {
                                setPage(prevPage => ({
                                    ...prevPage,
                                    section: prevPage.section.map((item, index) =>
                                        index === secIndex
                                            ? {
                                                ...item,
                                                list: item.list.map((qn, qnIndex) =>
                                                    qnIndex === data.index
                                                        ? {
                                                            ...qn,
                                                            options: qn.options.map((opn, idx) =>
                                                                idx === 2 ? e.target.value : opn
                                                            )
                                                        }
                                                        : qn
                                                )
                                            }
                                            : item
                                    )
                                }));
                            }}
                        ></textarea>
                    </div>

                    {/* Option D */}
                    <div className={styles.optinfo}>
                        <div className={styles.optno}>
                            <input
                            type="radio"
                            name={`ans-${secIndex}-${data.index}`} // unique name per question
                            value={3} // i is 0 for Option A, 1 for B, etc.
                            checked={data.ans === 3}
                            onChange={() => {
                                setPage(prevPage => ({
                                ...prevPage,
                                section: prevPage.section.map((section, secIdx) =>
                                    secIdx === secIndex
                                    ? {
                                        ...section,
                                        list: section.list.map((qn, qnIdx) =>
                                            qnIdx === data.index
                                            ? { ...qn, ans: 3 }
                                            : qn
                                        )
                                        }
                                    : section
                                )
                                }));
                            }}
                            />
                        </div>
                        <textarea
                            className={styles.opttxtarea}
                            placeholder='Option D here...'
                            value={data.options?.[3] || ""}
                            onChange={(e) => {
                                setPage(prevPage => ({
                                    ...prevPage,
                                    section: prevPage.section.map((item, index) =>
                                        index === secIndex
                                            ? {
                                                ...item,
                                                list: item.list.map((qn, qnIndex) =>
                                                    qnIndex === data.index
                                                        ? {
                                                            ...qn,
                                                            options: qn.options.map((opn, idx) =>
                                                                idx === 3 ? e.target.value : opn
                                                            )
                                                        }
                                                        : qn
                                                )
                                            }
                                            : item
                                    )
                                }));
                            }}
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}
