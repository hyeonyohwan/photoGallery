import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    // 파이어스토어에 문서를 아이디와 함께 내림차순으로 업데이트하는 기능
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        // onSnapshot() 메소드로 문서를 수신 대기할 수 있습니다. 사용자가 제공하는 콜백이 최초로 호출될 때 단일 문서의 현재 콘텐츠로 문서 스냅샷이 즉시 생성됩니다. 그런 다음 콘텐츠가 변경될 때마다 콜백이 호출되어 문서 스냅샷을 업데이트합니다.

        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFirestore;
