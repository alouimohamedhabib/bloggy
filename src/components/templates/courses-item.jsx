import { computeHeadingLevel } from "@testing-library/dom";
import { Link } from "react-router-dom";
import CleanRatingRenderer from "../../shared/helpers/rating-rounder";
import EnrollBtn from "../styled/enroll-btn"; 
import WideBlock from "../styled/wide-block";

const CourseItem = ({ courseItem }) => {
    return <>
        <WideBlock key={courseItem.id}>
            <div className="rating">
                {CleanRatingRenderer(courseItem.rating)}⭐
                </div>
            <h2 className="h2">{courseItem.title}</h2>
            <p dangerouslySetInnerHTML={createMarkup(courseItem.description)}></p>
            {courseItem.is_published && <a href={courseItem.url} target="_blank">
                <EnrollBtn>
                    Enroll <span>🚀</span>
                </EnrollBtn>
            </a>
            }
            {!courseItem.is_published &&
                <EnrollBtn>
                    Soon <span>🕰️</span>
                </EnrollBtn>
            }
        </WideBlock>
    </>
    function createMarkup(html) {
        return { __html: html };
    }

}
export default CourseItem;