import TeamMemberCard from "./TeamMemberCard";

export default function Home() {
  return (
    <>
    <TeamMemberCard 
        avatarPath="/avatar.png"
        name="Jan Kowalski"
        role="Senior if-else developer"
        skills={[
            "HTML",
            "CSS",
            "JS",
            "React",
            "next.js",
            "LaTeX macros",
            "VBA",
        ]}
        bio= {` Lorem ipsum dolor sit amet consectetur adipiscing elit.
                Quisque faucibus ex sapien vitae pellentesque sem placerat.
                In id cursus mi pretium tellus duis convallis.
                Tempus leo eu aenean sed diam urna tempor.

                Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
                Iaculis massa nisl malesuada lacinia integer nunc posuere.
                Ut hendrerit semper vel class aptent taciti sociosqu.
                Ad litora torquent per conubia nostra inceptos himenaeos.
            `}
    />
    <TeamMemberCard 
        avatarPath="/avatar2.png"
        name="Adam Nowak"
        role="Senior for-loop developer"
        skills={[
            "for(;;)",
            "foreach(x in iter)",
            "for x in iter",
            "for(T x: iter)",
            "[x for x in iter]",
            "for x of obj",
            "iter.foreach()",
            "for x <- iter do",
            "range do |i|",
            "foreach($map as $key => $value)",
        ]}
        bio= {` Lorem ipsum dolor sit amet consectetur adipiscing elit.
                Quisque faucibus ex sapien vitae pellentesque sem placerat.
                In id cursus mi pretium tellus duis convallis.
                Tempus leo eu aenean sed diam urna tempor.

                Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
                Iaculis massa nisl malesuada lacinia integer nunc posuere.
                Ut hendrerit semper vel class aptent taciti sociosqu.
                Ad litora torquent per conubia nostra inceptos himenaeos.

                Lorem ipsum dolor sit amet consectetur adipiscing elit.
                Quisque faucibus ex sapien vitae pellentesque sem placerat.
                In id cursus mi pretium tellus duis convallis.
                Tempus leo eu aenean sed diam urna tempor.
            `}
    />
   </>
  );
}