import { useRouter } from "next/router";

import styles from "../../styles/nav.module.css";
import classNames from "classnames";

import { Chip } from "@material-ui/core";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import FaceIcon from "@material-ui/icons/Face";
import { useSelector } from "react-redux";

export default function Navbar({ inverted = true }) {
  const route = useRouter();
  const { profile } = useSelector((state) => state.profile);
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <div className={classNames("flex_between", styles.nav)}>
      <div className={styles.logo}>
        <LocalLibraryIcon className={styles.icon} />
        <h2 className={styles.logoText}>CourseBook</h2>
      </div>
      {!inverted && (
        <div className="flex">
          <div
            className={styles.link}
            onClick={() => route.push("/disciplines")}
          >
            Disciplines
          </div>
          <div className={styles.link} >
            {currentUser?.roles[0] !== "Administrator" ? (
              <Chip
                style={{ cursor: "pointer" }}
                size="medium"
                label={profile?.name || "username"}
                icon={<FaceIcon />}
                onClick={() => route.push("/profile")}
              />
            ) : (
                <Chip
                style={{ cursor: "pointer" }}
                size="medium"
                label={"Admin"}
                icon={<FaceIcon />}
                onClick={() => route.push("/admin/ManageFaculty")}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
