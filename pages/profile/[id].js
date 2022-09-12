import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { client, getProfileById } from "../../api";

export default function Profile() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      ID: {id}
    </div>
  );
}