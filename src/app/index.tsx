import { useState } from "react";
import {
  Alert,
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import InfoCard from "../components/InfoCard";

const DAFTAR_MAHASISWA = [
  { id: "1", nama: "Alifia Putri", prodi: "Sistem Informasi" },
  { id: "2", nama: "Budi Santoso", prodi: "Teknologi Informasi" },
  { id: "3", nama: "Citra Dewi", prodi: "Sistem Informasi" },
  { id: "4", nama: "Dimas Anggara", prodi: "Teknik Informatika" },
  { id: "5", nama: "Eka Nur Safitri", prodi: "Sistem Informasi" },
];

export default function App() {
  const [keyword, setKeyword] = useState("");

  const filteredMahasiswa = DAFTAR_MAHASISWA.filter((item) =>
    item.nama.toLowerCase().includes(keyword.toLowerCase()),
  );

  const handlePressDetail = (taskTitle, status) => {
    const message = `Detail Informasi Kartu:\n- Judul: ${taskTitle}\n- Status: ${status.toUpperCase()}`;
    if (Platform.OS === "web") {
      window.alert(message);
    } else {
      Alert.alert("Informasi Detail Tugas", message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>UTS LAB.PAM</Text>
        <Text style={styles.headerSubtitle}>Noges Vacin - 2431070</Text>
      </View>

      <FlatList
        data={filteredMahasiswa}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.scrollContainer}
        ListHeaderComponent={
          <>
            <Text style={styles.sectionTitle}>
              Soal 1: Reusable Component (InfoCard)
            </Text>
            <InfoCard
              title="Implementasi Navigasi & UI Mobile"
              status="selesai"
              onPress={() =>
                handlePressDetail(
                  "Implementasi Navigasi & UI Mobile",
                  "selesai",
                )
              }
            />
            <InfoCard
              title="Integrasi API & State Management"
              status="proses"
              onPress={() =>
                handlePressDetail("Integrasi API & State Management", "proses")
              }
            />

            <Text style={[styles.sectionTitle, { marginTop: 24 }]}>
              Soal 2: Direktori Mahasiswa
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Cari nama mahasiswa..."
              placeholderTextColor="#94a3b8"
              value={keyword}
              onChangeText={setKeyword}
            />
          </>
        }
        renderItem={({ item }) => (
          <View style={styles.studentCard}>
            <Text style={styles.studentName}>{item.nama}</Text>
            <Text style={styles.studentProdi}>{item.prodi}</Text>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Data tidak ditemukan!</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  header: {
    backgroundColor: "#1e293b",
    padding: 20,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#94a3b8",
    marginTop: 4,
  },
  scrollContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    marginBottom: 12,
    color: "#1e293b",
  },
  studentCard: {
    backgroundColor: "#ffffff",
    padding: 14,
    borderRadius: 8,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  studentName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1e293b",
  },
  studentProdi: {
    fontSize: 13,
    color: "#64748b",
    marginTop: 2,
  },
  emptyContainer: {
    padding: 24,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 15,
    color: "#ef4444",
    fontWeight: "600",
  },
});
