import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function InfoCard({ title, status, onPress }) {
  const isSelesai = status === "selesai";

  return (
    <View style={styles.card}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <View
          style={[
            styles.badge,
            isSelesai ? styles.badgeSelesai : styles.badgeProses,
          ]}
        >
          <Text
            style={[
              styles.badgeText,
              isSelesai ? styles.textSelesai : styles.textProses,
            ]}
          >
            {status.toUpperCase()}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1e293b",
    flex: 1,
    marginRight: 8,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeSelesai: {
    backgroundColor: "#dcfce7",
  },
  badgeProses: {
    backgroundColor: "#ffedd5",
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "700",
  },
  textSelesai: {
    color: "#16a34a",
  },
  textProses: {
    color: "#ea580c",
  },
  button: {
    backgroundColor: "#2563eb",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 14,
  },
});
