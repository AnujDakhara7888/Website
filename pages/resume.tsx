/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

/* -------------------------- Internal Dependencies ------------------------- */

import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

// const Resume = () => {
//   const resumeData =
//     'https://www.canva.com/design/DAEEkidwA2Q/view?utm_content=DAEEkidwA2Q&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink';

//   const previewData = `${resumeData.substr(
//     0,
//     resumeData.lastIndexOf('/') + 1
//   )}view?embed`;

//   return (
//     <Layout title="Resume">
//       <PageWrapper>
//         <PageSection>
//           <article>
//             <h1 className="intro__text">Resumé.</h1>
//             <p>
//               Reach out to me via my{' '}
//               <b>
//                 <Link href="/contact">contact page</Link>
//               </b>{' '}
//               .{' '}
//               <b>
//                 <a
//                   href={`https://drive.google.com/file/d/${process.env.NEXT_PUBLIC_RESUME_LINK}/view?usp=sharing`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Go to Resumé Page"
//                 >
//                   view
//                 </a>
//               </b>{' '}
//               or{' '}
//               <b>
//                 <a
//                   href={`https://drive.google.com/file/d/${process.env.NEXT_PUBLIC_RESUME_LINK}/view?usp=sharing`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Go to Resumé Page"
//                 >
//                   download
//                 </a>
//               </b>{' '}
//               the resume{' '}
//             </p>
//           </article>
//           <br />
//           <iframe
//             src={previewData}
//             allowFullScreen
//             width="740"
//             height="780"
//             title="Anuj Sureshbhai Dakhara Resumé"
//           />
//         </PageSection>
//         <br />
//         <br />
//         <FooterLink goto="/contact" className="mt-3 mb-5">
//           Are you convinced to contact me now ?
//         </FooterLink>
//         <br />
//       </PageWrapper>
//     </Layout>
//   );
// };

// const PageSection = styled.div`
//   .intro__text {
//     font-size: var(--font-x-lg);
//     font-weight: 900;
//     margin: 4rem 0rem 1.5rem;
//     position: relative;
//   }
//   p {
//     font-size: calc(var(--font-sm) + 0.9px);
//     margin-top: 0.6rem;
//     line-height: 2;
//     font-weight: 400;
//     color: var(--article-color) !important;
//   }
// 1_o69Wj2D7lxRrVGAEGQPJCw5mu77PMGd
//   iframe {
//     width: 100%;
//     filter: invert(var(--invert)) grayscale(calc(var(--invert) - 0.15));
//     border: none;
//     height: 44.5rem;
//     @media (min-width: 768px) {
//       width: 82.8% !important;
//       height: 70.4rem !important;
//     }
//   }
// `;
// export default Resume;
const Resume = () => {
  const resumeData =
    'https://drive.google.com/file/d/1douKE8MaSexv2hziWoR1tBOhtzAqB6NWukzP3hzuOB0/view'; // Replace with your actual resume link

  return (
    <Layout title="Resume">
      <PageWrapper>
        <PageSection>
          <article>
            <h1 className="intro__text">Resumé</h1>
            <p>
              Feel free to reach out to me via my{' '}
              <b>
                <Link href="/contact">contact page</Link>
              </b>
              . You can also{' '}
              <b>
                <a
                  href={resumeData}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Resumé"
                >
                  view
                </a>
              </b>{' '}
              or{' '}
              <b>
              <a
  href="https://docs.google.com/document/d/1douKE8MaSexv2hziWoR1tBOhtzAqB6NWukzP3hzuOB0/export?format=pdf"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Download Resumé"
>
  Download
</a>

              </b>{' '}
              my resume.
            </p>
          </article>
          <br />
          <iframe
            src={resumeData.replace('/view', '/preview')}
            allowFullScreen
            width="740"
            height="780"
            title="Anuj Sureshbhai Dakhara Resumé"
          />
        </PageSection>
        <br />
        <br />
        <FooterLink goto="/contact" className="mt-3 mb-5">
          Ready to connect? Contact me now!
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};

const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }
  iframe {
    width: 100%;
    filter: none;
    border: none;
    height: 44.5rem;
    @media (min-width: 768px) {
      width: 82.8% !important;
      height: 70.4rem !important;
    }
  }
`;

export default Resume;
