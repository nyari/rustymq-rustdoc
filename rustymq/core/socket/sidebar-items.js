initSidebarItems({"enum":[["OpFlag","Operation flagsConfiguration for individual send and receive calls on [`InwardSocket`]s and [`OutwardSocket`]s"],["PeerIdentification","Identifier for a peer"],["QueryTypedError","Result type for a typed query operation (a send and receive operation in some order consecutively)"],["ReceiveTypedError","Result type for a typed receive operation"],["SendTypedError","Result type for a typed sending operation"],["SocketError","[`Socket`] errorsContains the possible errors for a socket that may need to be handled on the user side"],["SocketInternalError","[`Socket`] errorsContains the possible errors for a socket that may need to be handled internally or by the user"]],"struct":[["ArcSocket","ArcSocketWrapper around a [`Socket`] that allows for easier sharing between threads"]],"trait":[["BidirectionalSocket","Bidirectional Socket traitThe main interface for the user to send and receive messages through the same opened RustyMQ socket There can be several implementations of it depending on the communication model used"],["InwardSocket","Inward Socket traitThe main interface for the user to receive messages through the opened RustyMQ socket There can be several implementations of it depending on the communication model used"],["OutwardSocket","Outward Socket traitThe main interface for the user to send messages through the opened RustyMQ socket There can be several implementations of it depending on the communication model used"],["Socket","General Socket traitThe main interface for the user to interact with during operaton There can be several implementations of it dependinng on communication model"]]});