import { InteriorIcon } from "../../../../components/icons/InteriorIcon";
import { PlanIcon } from "../../../../components/icons/PlanIcon";
import { BimIcon } from "../../../../components/icons/BimIcon";
import { DarkInteriorIcon } from "../../../../components/icons/DarkInteriorIcon";

import { DarkPlanIcon } from "../../../../components/icons/DarkPlanIcon";
import { useTheme } from "../../../../context/useTheme";

import ArchLight from "../../../../assets/arch_light.svg";
import Frame from "../../../../assets/Frame.svg";
import Pdark from "../../../../assets/dark_pd.svg";
import Plight from "../../../../assets/pd_light.svg";

import { DesignContent } from "./DesignContent.styles";
import { DarkBimIcon } from "../../../../components/icons/DarkBimIcon";

export const DesignCard = () => {
  const { mode } = useTheme();

  return (
    <DesignContent>
      <div className={`about ${mode}`}>
        <div>
          {mode === "dark" ? (
            <img src={ArchLight} alt="" />
          ) : (
            <img src={Frame} alt="" />
          )}
        </div>
        <h3>Architecture Design</h3>
        <p>
          Our success is achieved through effective partnerships and meticulous
          planning by exploring opportunities before embarking on agreed design
          strategies. By carefully executing crafted bespoke designs which
          respond to both the specific site challenges and unique client
          expectations. Whilst our primary focus is always firmly fixed on best
          value outcomes which deliver operational high performance, we also
          aspire to achieve higher architectural ideals which ensure our
          buildings uplift the spirit and leave a lasting impression on the
          communities and users who use them.
        </p>
      </div>
      <div className={`about ${mode}`}>
        <div>
          {mode === "dark" ? (
            <img src={Pdark} alt="" />
          ) : (
            <img src={Plight} alt="" />
          )}
        </div>
        <h3>Project Develpment Consultancy</h3>
        <p>
          we leverage our experience our project management systems and
          processes are continually kept under review to ensure current best
          practice and leverage technological advancements as they occur. This
          includes collaborative document management and content sharing
          platforms, use of BIM 3D models in a Common Data Environment, Level 2
          BIM 4D for program planning and BIM 5D for cost management.
        </p>
      </div>
      <div className={`about ${mode}`}>
        {mode === "dark" ? <PlanIcon /> : <DarkPlanIcon />}
        <h3>Planning & Urban Design</h3>
        <p>
          Urban design and planning are integrated at every stage of a project,
          to ensure our master plans, approvals, designs, and policies are
          holistic, achievable, and based on good strategy and quality design.
          We appreciate the environmental, financial and policy conditions of
          each project, consistently delivering effective local planning
          outcomes for clients nationally. The excitement for us come from
          working with clients, and project partners to find the clear line of
          sight between the opportunity and the outcome.
        </p>
      </div>
      <div className={`about ${mode}`}>
      {mode === "dark" ? <InteriorIcon /> : <DarkInteriorIcon />}
        <h3>Interior Design</h3>
        <p>
          We are trusted by clients to create beautiful, experiential
          environments that engage and delight communities through a strategic
          and insightful approach. From planning to delivery, we take clients on
          a collaborative design journey where we push boundaries and challenge
          assumptions. We draw on workplace, education, and lifestyle project
          experience to create spaces that foster learning, collaboration, and
          engagement. Our passion comes through working in partnership with our
          clients, listening and communicating openly to understand the goals
          and constraints that help inspire our unique vision for each project.
        </p>
      </div>
      <div className={`about ${mode}`}>
      {mode === "dark" ? <BimIcon /> : <DarkBimIcon />}
        <h3>Pagagon Bim Solutions</h3>
        <p>
          Urban design and planning are integrated at every stage of a project,
          to ensure our master plans, approvals, designs, and policies are
          holistic, achievable, and based on good strategy and quality design.
          We appreciate the environmental, financial and policy conditions of
          each project, consistently delivering effective local planning
          outcomes for clients nationally. The excitement for us come from
          working with clients, and project partners to find the clear line of
          sight between the opportunity and the outcome.
        </p>
      </div>
    </DesignContent>
  );
};
