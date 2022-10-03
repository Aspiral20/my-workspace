import React, { FC, Fragment } from 'react';
import { getCourseJSContent } from "../content/content_page";
import { DefaultCode, DefaultText, DefaultTitle } from "../../../components";

interface ClosuresProps {

}

const Closures: FC<ClosuresProps> = ({}) => {
  const { closures } = getCourseJSContent
  return (
    <>
      {closures.page.map(content => (
        <Fragment key={content.id}>
          {content.title && <DefaultTitle>{content.title}</DefaultTitle>}
          {content.text && <DefaultText>{content.text}</DefaultText>}
          {content.code && <DefaultCode>{content.code}</DefaultCode>}
        </Fragment>
      ))}
    </>
  );
};

export default Closures;