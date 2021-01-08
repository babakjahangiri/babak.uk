import React from 'react'
import { Fragment } from 'react'
import skills from './../../../data/skills.json'
import './skills.scss'
const Skills = () => {
    return (
        <Fragment>
            <table>
                <tbody>
                    {skills.map((skill) => {
                        return (
                            <tr className="skill-row" key={skill.id}>
                                <td>
                                    <div className="skill-title">
                                        {skill.name}
                                    </div>
                                </td>
                                <td className="skill-bar-column">
                                    <div className="skill-bar">
                                        <span
                                            className="skill-progress"
                                            style={{ width: skill.percentage }}
                                        ></span>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Fragment>
    )
}

export default Skills
