import "./styles.scss";

import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

interface IProps {
  title: string;
  description?: string;
  contentList?: Array<any>;
  divider?: boolean;
}

export default function ReadMoreAccordionData({
  title,
  description = "",
  contentList = [],
  divider = false,
}: IProps) {
  return (
    <div
      className={
        divider
          ? "read-more-accordion-content content-border-bottom"
          : "read-more-accordion-content"
      }
    >
      <h2 className="read-more-accordion-content__title">{title}</h2>

      {description !== "" ? (
        <h3 className="read-more-accordion-content__description">
          {description}
        </h3>
      ) : null}

      {contentList.length !== 0 ? (
        <ul className="read-more-accordion-content__content-list">
          {contentList.map((content) => {
            return (
              <li>
                <span>
                  <CheckOutlinedIcon />
                </span>
                <span>{content}</span>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
